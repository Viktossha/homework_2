import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': { // by name
            let copyState = [...state]
            if (action.payload === 'up') {
                copyState.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1
                    }
                    if (a.name < b.name) {
                        return -1
                    }
                    return 0
                })
            }
            if (action.payload === 'down') {
                copyState.sort((a, b) => {
                    if (a.name > b.name) {
                        return -1
                    }
                    if (a.name < b.name) {
                        return 1
                    }
                    return 0
                })
            }
            return copyState
        }
        case 'check': {
            return state.filter(u => u.age > 18)
        }
        default:
            return state
    }
}
