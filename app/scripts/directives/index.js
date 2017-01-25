import RegisterClicky from './clicky'
import RegisterEscapy from './escapy'
import RegisterFocusy from './focusy'

export default ngModule => {
    RegisterClicky(ngModule);
    RegisterEscapy(ngModule);
    RegisterFocusy(ngModule);
};