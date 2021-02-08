const db2 = firebase.database(),
    groupsRef = db2.ref().child('groups')

const db = firebase.database()



function createGroup(TitleValue, PasswordValue) {
    firebase.auth().onAuthStateChanged(user => {
        const userID = user.uid
        if (user) {
            let id = groupsRef.push().key,
                groupData = {
                    name: TitleValue,
                    psswrd: PasswordValue,
                    notes: {},
                    members: {},
                    admins: {
                        [userID]: true
                    }
                },
                updateData = {}

            updateData[`/${id}`] = groupData

            groupsRef.update(updateData)


            let usersRef = firebase.database().ref().child('users')
            usersRef.child(userID + '/groups').update({
                [id]: 'true'
            })
            h3.innerText = id
        } else {
        }
    })


}



firebase.auth().onAuthStateChanged(user => {

    const userID = user.uid
    if (user) {
        let usersGroupsRef = firebase.database().ref().child('users/' + userID + '/groups')
        usersGroupsRef.on('child_added', gp => {
            groupsRef.child(gp.key).once('value', data => {

                LoadGroup(data.key, data.val())

            })
        })

    }
})



function joinGroup(IdGroup, password) {
    firebase.auth().onAuthStateChanged(user => {
        const userID = user.uid
        if (user) {
            const modal = document.querySelector(".modal")
            let groupRef = groupsRef.child(IdGroup)
            let userGroupRef = firebase.database().ref().child('users/' + userID + '/groups' + '/' + IdGroup)
            groupRef.once('value', gp => {

                if (gp.exists() && gp.child('psswrd').val() == password) {
                    userGroupRef.once('value', gp => {

                        if (!(gp.exists())) {
                            let usersRef = firebase.database().ref().child('users')
                            usersRef.child(userID + '/groups').update({
                                [IdGroup]: false
                            })

                            groupRef.child('admins').update({
                                [userID]: false
                            })
                        }
                        if (modal.children[4].className == "join-psswrd active") {
                            e.preventDefault();
                            modal.children[4].classList.remove("active");
                            modal.children[6].classList.toggle("active");
                        } else {
                            e.preventDefault();
                            closeModal();
                            modal.children[6].classList.toggle("active");
                            modal.children[0].classList.toggle("active");
                        }

                    })

                }
                if (modal.children[4].className == "join-psswrd active") {
                    e.preventDefault();
                    modal.children[4].classList.remove("active");
                    modal.children[5].classList.toggle("active");
                } else {
                    e.preventDefault();
                    closeModal();
                    modal.children[5].classList.toggle("active");
                    modal.children[0].classList.toggle("active");
                }
            })


        }
    })

}

function delteGroup(GroupId) {
    var idGroup = GroupId;
    

    firebase.auth().onAuthStateChanged(function (user) {

        if (user) {
            let iamAdmin = false
            let wasAdmin = true
            db.ref(`groups/${idGroup}/admins/${user.uid}`).on('value', (e) => {
                iamAdmin = e.val();
            })

            db.ref(`groups/${idGroup}/admins`).once("value", member => {
                if (iamAdmin) {
                    member.forEach(function (user) {
                        db.ref(`users/${user.key}/groups/${idGroup}`).remove().then(() => {
                            db.ref(`users/${user.key}/groups/${idGroup}`).remove()
                        })
                    })

                }

            }).then(() => {
                if (iamAdmin) {
                    db.ref(`groups/${idGroup}`).remove()
                } else {
                    wasAdmin = false
                    console.log("No eres admin");
                }

            }).then(() => {
                if (wasAdmin) {
                    window.location.href = "dashboard.html"
                }
            })





        }
    })

}