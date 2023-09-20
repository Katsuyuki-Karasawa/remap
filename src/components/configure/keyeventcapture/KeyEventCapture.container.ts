import { connect } from 'react-redux';
import KeyEventCapture from './KeyEventCapture';
import { RootState } from '../../../store/state';

const mapStateToProps = (state: RootState) => {
  return {
    labelLang: state.app.labelLang,
    selectedLayer: state.configure.keymap.selectedLayer,
    testMatrix: state.configure.keymapToolbar.testMatrix,
    selectedPos: state.configure.keymap.selectedPos,
    selectedEncoderId: state.configure.keymap.selectedEncoderId,
    selectedKeySwitchOperation:
      state.configure.keymap.selectedKeySwitchOperation,
    keyboardDefinition: state.entities.keyboardDefinition,
  };
};
export type KeyEventCaptureStateType = ReturnType<typeof mapStateToProps>;

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (_dispatch: any) => {
  return {};
};

export type KeyEventCaptureActionsType = ReturnType<typeof mapDispatchToProps>;
export default connect(mapStateToProps, mapDispatchToProps)(KeyEventCapture);
