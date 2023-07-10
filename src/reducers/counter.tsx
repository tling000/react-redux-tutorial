const initCount = 0
const initMessage = '路地裏の猫'
let newCount = 0

const initialState = {
    count: initCount,
    message: initMessage,
}

const updateMessage = (newCount) => {
    let newMessage = initMessage
    if (newCount < 0) {
        newMessage = 'マイナス猫'
      } else if (newCount >= 1000) {
        newMessage = 'GOD猫！！！！'
      } else if (newCount >= 100) {
        newMessage = '猫！！！！'
      } else if (newCount >= 10) {
        newMessage = '下積み猫'
      }
    return newMessage
}

const counter = (state = initialState, action: any) => {
    switch (action.type) {
        case 'INCREMENT':
            newCount = state.count + 1
            return {
                ...state,
                count: newCount,
                message: updateMessage(newCount)
            }
        case 'DECREMENT':
            newCount = state.count - 1
            return {
                ...state,
                count: newCount,
                message: updateMessage(newCount)
            }
        case 'DOUBLE':
            newCount = state.count * 2
            return {
                ...state,
                count: newCount,
                message: updateMessage(newCount)
            }
        case 'RESET':
            return {
                ...state,
                count: initCount,
                message: initMessage
            }
    }

    return state
}

export default counter