const users = []

const addUser = ({ id, username , room }) => {
    //clean data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //validate data
    if(!username || !room){
        return {
            error:'Username and room are required'
        }
    }

    //check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    //validate username
    if(existingUser){
        return {
            error:'Username is in use!'
        }
    }

    //store user
    const user = {
        id,
        username,
        room
    }
    users.push(user)
    return {user}
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)
    if(index < 0){
        return {
            error:'No user found'
        }
    }
    return users.splice(index,1)[0]
}


const getUser = (id) => {
    const index = users.findIndex((user) => user.id === id)
    if(index < 0){
        return {
            error:'No user found'
        }
    }
    return users[index]
}

const getUsersInRoom = (room) => { 
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}
