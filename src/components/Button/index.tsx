import { ShoppingCart } from "@mui/icons-material";
import { ButtonStyle } from "./styles";

const Button = () => {
  const handleAddCart = () => {};
  return (
    <ButtonStyle>
      <div>
        <button onClick={handleAddCart}>
          <ShoppingCart className="material-icons-outlined" />
          장바구니
        </button>
      </div>
    </ButtonStyle>
  );
};

export default Button;
