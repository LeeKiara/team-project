import { ShoppingCart } from "@mui/icons-material";
import { ButtonStyle } from "./styles";

const Button = () => {
  return (
    <ButtonStyle>
      <li>
        <button>
          <ShoppingCart className="material-icons-outlined" />
          장바구니
        </button>
      </li>
    </ButtonStyle>
  );
};

export default Button;
