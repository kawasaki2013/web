// --------------------------------------------------
//   Import
// --------------------------------------------------

// import { List } from 'immutable';
import { Model, fromJSOrdered } from '../models/model';



const reducer = (state = new Model(), action) => {

  // const currentThemeNameId = state.getIn(['formObj', 'currentThemeNameId']);
  // const currentThemeType = state.getIn(['formObj', 'currentThemeType']);
  // const shareType = state.getIn(['formObj', 'shareType']);

  switch (action.type) {

    // case 'INITIAL_ASYNCHRONOUS': {
    //   return state
    //     .set('designThemesMap', action.designThemesMap)
    //     .set('iconThemesMap', action.iconThemesMap)
    //     .setDataObj('editThemes', action.loadedDataEditThemesObj)
    //     .setDataObj('designThemes', action.loadedDataDesignThemesObj)
    //     .setDataObj('iconThemes', action.loadedDataIconThemesObj)
    //     .set('randomDesignThemesList', List(action.randomDesignThemesArr))
    //     .set('randomIconThemesList', List(action.randomIconThemesArr));
    // }



    // --------------------------------------------------
    //   共通
    // --------------------------------------------------

    case 'URL_DIRECTORY': {
      // $('#slideMenu').unbind();
      // return state
      //   .set('urlDirectory1', action.urlDirectory1)
      //   .set('urlDirectory2', action.urlDirectory2)
      //   .set('urlDirectory3', action.urlDirectory3);

      return state
        .set('drawerMenuActive', false)
        .set('urlDirectory1', action.urlDirectory1)
        .set('urlDirectory2', action.urlDirectory2)
        .set('urlDirectory3', action.urlDirectory3);
    }



    // --------------------------------------------------
    //   モーダル
    // --------------------------------------------------

    case 'MODAL_OBJ_NOTIFICATION_SHOW': {
      return state.setIn(['modalObj', 'notification', 'show'], action.value);
    }



    // --------------------------------------------------
    //   通知
    // --------------------------------------------------

    case 'NOTIFICATION_OBJ_UNREAD_COUNT': {
      return state.setIn(['notificationObj', 'unreadCount'], action.value);
    }


    case 'NOTIFICATION_OBJ_RESET_ACTIVE_PAGE': {
      return state
        .setIn(['notificationObj', 'unreadActivePage'], 1)
        .setIn(['notificationObj', 'alreadyReadActivePage'], 1);
    }


    case 'NOTIFICATION_OBJ': {
      return state.setNotificationObj(action.unreadTotal, action.unreadArr, action.alreadyReadTotal, action.alreadyReadArr, action.activePage);
    }


    // case 'NOTIFICATION_UNREAD_COUNT': {
    //   return state.setIn(['notificationObj', 'unreadCount'], action.value);
    // }



    // --------------------------------------------------
    //   フッター
    // --------------------------------------------------

    case 'FOOTER_CARD_TYPE': {

      const footerObj = {
        cardType: action.cardType,
        gameCommunityRenewalArr: action.gameCommunityRenewalArr,
        gameCommunityAccessArr: action.gameCommunityAccessArr,
        userCommunityAccessArr: action.userCommunityAccessArr
      };

      return state.set('footerObj', fromJSOrdered(footerObj));

    }



    // --------------------------------------------------
    //   ドロワーメニュー / スマートフォン・タブレット用
    //   boolean のトグルになっている
    // --------------------------------------------------

    case 'DRAWER_MENU_ACTIVE': {

      let drawerMenuActive = true;

      if (state.get('drawerMenuActive')) {
        drawerMenuActive = false;
      }

      // console.log('reducer / DRAWER_MENU_ACTIVE = ', drawerMenuActive);

      return state.set('drawerMenuActive', drawerMenuActive);

    }



    default: {
      return state;
    }

  }

};



export default reducer;