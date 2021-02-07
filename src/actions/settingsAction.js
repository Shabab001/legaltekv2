export const openLeftSidebarAction = (e) => dispatch => {
	dispatch({
		type: 'TOGGLE_LEFT_SIDEBAR',
		payload: e
	})
}

export const openRightSidebarAction = (e) => dispatch => {
	console.log(e)
	dispatch({
		type: 'TOGGLE_RIGHT_SIDEBAR',
		payload: e
	})
}

export const openSettingbarAction = (e) => dispatch => {
	console.log(e)
	dispatch({
		type: 'TOGGLE_SETTING_BAR',
		payload: e
	})
}

export const changeThemeColorAction = (e) => dispatch => {
	dispatch({
		type: 'THEME_COLOR_CHANGE',
		payload: e
	})
}

export const darkModeAction = (e) => dispatch => {
	dispatch({
		type: 'CHANGE_DARK_MODE',
		payload: e
	})
}

export const darkHeaderAction = (e) => dispatch => {
	dispatch({
		type: 'CHANGE_DARK_HEADER',
		payload: e
	})
}
export const fixNavbarAction = (e) => dispatch => {
	dispatch({
		type: 'FIX_NAVBAR_HEADER',
		payload: e
	})
}
export const darkMinSidebarAction = (e) => dispatch => {
	dispatch({
		type: 'DARK_MIN_SIDEBAR',
		payload: e
	})
}
export const darkSidebarAction = (e) => dispatch => {
	dispatch({
		type: 'DARK_SIDEBAR',
		payload: e
	})
}
export const iconColorAction = (e) => dispatch => {
	dispatch({
		type: 'CHANGE_ICON_COLOR',
		payload: e
	})
}
export const gradientColorAction = (e) => dispatch => {
	dispatch({
		type: 'CHANGE_GRADIENT_COLOR',
		payload: e
	})
}

export const boxShadowAction = (e) => dispatch => {
	dispatch({
		type: 'CHANGE_BOX_SHADOW',
		payload: e
	})
}

export const boxLayoutAction = (e) => dispatch => {
	dispatch({
		type: 'CHANGE_BOX_LAYOUT',
		payload: e
	})
}
export const rtlAction = (e) => dispatch => {
	dispatch({
		type: 'IS_RTL',
		payload: e
	})
}
export const fontAction = (e) => dispatch => {
	dispatch({
		type: 'CHANGE_FONT',
		payload: e
	})
}
export const menuGridAction = (e) => dispatch => {
	dispatch({
		type: 'MENU_LAYOUT_GRID',
		payload: e
	})
}
export const authMenuAction = (e) => dispatch => {
	dispatch({
		type: 'TOGGLE_AUTH_MENU',
		payload: e
	})
}
export const languageMenuAction = (e) => dispatch => {
	dispatch({
		type: 'TOGGLE_LANGUAGE_MENU',
		payload: e
	})
}
export const notificationMenuAction = (e) => dispatch => {
	dispatch({
		type: 'TOGGLE_NOTIFICATION_MENU',
		payload: e
	})
}
export const pagesMenuAction = (e) => dispatch => {
	dispatch({
		type: 'TOGGLE_PAGE_MENU',
		payload: e
	})
}
export const mailMenuAction = (e) => dispatch => {
	dispatch({
		type: 'TOGGLE_MAIL_MENU',
		payload: e
	})
}
export const profileMenuAction = (e) => dispatch => {
	dispatch({
		type: 'TOGGLE_PROFILE_MENU',
		payload: e
	})
}
export const toggle3DotMenuAction = (e) => dispatch => {
	dispatch({
		type: 'TOGGLE_3DOT_MENU',
		payload: e
	})
}
export const dropDownMenuAction = (e) => dispatch => {
	dispatch({
		type: 'TOGGLE_DROPDOWN_MENU',
		payload: e
	})
}