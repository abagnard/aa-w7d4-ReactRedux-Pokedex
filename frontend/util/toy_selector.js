
export const selectToys = (state) => {
  console.log(state);
	return state.details && state.details.toys ? Object.keys(state.details.toys).map((toyId) => {
		return state.details.toys[toyId];
	}) : [];
};
