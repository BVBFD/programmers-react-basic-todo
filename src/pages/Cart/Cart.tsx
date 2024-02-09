import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType, plusCount, minusCount } from "../../Redux/store";
const Cart = () => {
  const { user } = useSelector((state: RootStateType) => state);
  const { cart } = useSelector((state: RootStateType) => state.cart);
  const dispatch = useDispatch();

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경하기</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => (
          <tr>
            <td>{item.id + 1}</td>
            <td>{item.title}</td>
            <td>{item.count}</td>
            <td>
              <button
                className="btn btn-warning"
                style={{ marginRight: "10px" }}
                onClick={() => dispatch(plusCount(item.id))}
              >
                ➕
              </button>
              <button
                className="btn btn-warning"
                onClick={() => dispatch(minusCount(item.id))}
              >
                ➖
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Cart;
