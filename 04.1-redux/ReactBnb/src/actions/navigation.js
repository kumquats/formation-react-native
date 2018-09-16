export const CHANGE_SCREEN = 'CHANGE_SCREEN';

export const changeScreen = function( screen, params ) {
    return {
        type: CHANGE_SCREEN,
        screen,
        params
    }
};