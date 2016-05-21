export default socket => store => next => action => {
  if (action.remote) {
    //const clientId = store.getState().get('clientId');
    const { remote, type, ...rest } = action;
    socket.emit(remote, rest);
  }
  return next(action);
}