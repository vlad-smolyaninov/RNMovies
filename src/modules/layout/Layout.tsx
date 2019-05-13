import withHooks from "../../utils/withHooks"
import LayoutView from './LayoutView'
import {Actions} from 'react-native-router-flux'


export default withHooks(() => {

  return {
    title: Actions.currentScene
  }
})(LayoutView)

