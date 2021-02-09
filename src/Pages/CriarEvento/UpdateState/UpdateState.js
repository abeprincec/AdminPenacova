function updateAction(globalState, payload) {
  return {
    ...globalState,
    Evento: {
      ...globalState.Evento,
      ...payload,
    },
  };
}

export default updateAction;
