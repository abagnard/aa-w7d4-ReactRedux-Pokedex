

export const fetchAllPokemon = (success) => {
    $.ajax({
      url: 'api/pokemon',
      method: 'GET',
      success: (result) => {
        success(result);
      }
    });
};


export const fetchOnePokemon = (success, id) => {
  $.ajax({
    url: `api/pokemon/${id}`,
    method: 'GET',
    success: (result) => {
      success(result);
    }
  });
};
