import roomReducer, {getRooms, setError} from '../redux/roomSlice';
import {data} from '../testUtils/roomData';
const initialState = {
  error: null,
  loading: false,
  roomCapacity: [],
  roomTypes: [],
  rooms: [],
  room: {},
};

describe('roomReducer', () => {
  it('should return initial state', () => {
    const result = roomReducer(undefined, {type: 'unknown'});
    expect(result).toEqual(initialState);
  });
});

describe('getRooms request', () => {
  it('should set rooms when request is fulfilled', async () => {
    const result = await roomReducer(
      initialState,
      getRooms.fulfilled({rooms: data}),
    );
    expect(result.rooms).toEqual(data);
  });

  it('should set error when getRooms request is rejected', async () => {
    const result = await roomReducer(initialState, getRooms.rejected('error'));
    expect(result.error).toEqual('error');
  });
});

describe('setError action', () => {
  it('should be called and return payload undefined', async () => {
    const result = setError();
    expect(result.type).toBe('rooms/setError');
    expect(result.payload).toBeUndefined();
  });
});
