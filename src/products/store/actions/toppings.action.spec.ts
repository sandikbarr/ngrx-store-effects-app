import * as fromToppings from './toppings.action';

describe('Toppings Actions', () => {
  describe('LoadToppings Actions', () => {
    describe('LoadToppings', () => {
      it('should create an action', () => {
        const action = new fromToppings.LoadToppings();
        expect({ ...action }).toEqual({
          type: fromToppings.LOAD_TOPPINGS
        });
      });
    });

    describe('LoadToppingsFailure', () => {
      it('should create an action', () => {
        const payload = { message: 'Load Error' };
        const action = new fromToppings.LoadToppingsFailure(payload);

        expect({ ...action }).toEqual({
          type: fromToppings.LOAD_TOPPINGS_FAILURE,
          payload
        });
      });
    });

    describe('LoadToppingsSuccess', () => {
      it('should create an action', () => {
        const payload = [
          {
            id: 1,
            name: 'anchovy'
          },
          {
            id: 2,
            name: 'bacon'
          },
          {
            id: 3,
            name: 'basil'
          }
        ];
        const action = new fromToppings.LoadToppingsSuccess(payload);
        expect({ ...action }).toEqual({
          type: fromToppings.LOAD_TOPPINGS_SUCCESS,
          payload
        });
      });
    });
  });

  describe('VisualizeToppings Actions', () => {
    describe('VisualizeToppings', () => {
      it('shoild create an action', () => {
        const action = new fromToppings.VisualiseToppings([1, 2, 3]);
        expect({ ...action }).toEqual({
          type: fromToppings.VISUALISE_TOPPINGS,
          payload: [1, 2, 3]
        });
      });
    });
  });
});
