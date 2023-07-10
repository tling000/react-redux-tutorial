const initCount = 0
const initMessage = '路地裏の猫'
const initNyan = 'にゃん'

const initialState = {
    count: initCount,
    message: initMessage,
    nyan: initNyan
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

const updateNyan = (newCount) => {
    let newNyan = initNyan
    if (newCount < 0) {
        newNyan = '(ΦωΦ)'
      } else {
        newNyan = 'にゃ'+ 'ー'.repeat(newCount) + 'ん'
      }
    return newNyan
}

const counter = (state = initialState, action: any) => {
    let newCount = 0
    switch (action.type) {
        case 'INCREMENT':
            newCount = state.count + 1
            return {
                ...state,
                count: newCount,
                message: updateMessage(newCount),
                nyan: updateNyan(newCount)
            }
        case 'DECREMENT':
            newCount = state.count - 1
            return {
                ...state,
                count: newCount,
                message: updateMessage(newCount),
                nyan: updateNyan(newCount)
            }
        case 'DOUBLE':
            newCount = state.count * 2
            return {
                ...state,
                count: newCount,
                message: updateMessage(newCount),
                nyan: updateNyan(newCount)
            }
        case 'RESET':
            return {
                ...state,
                count: initCount,
                message: initMessage,
                nyan: initNyan
            }
    }

    return state
}

export default counter