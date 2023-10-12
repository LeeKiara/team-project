import { ShoppingCart } from "@mui/icons-material";
import { ButtonStyle } from "./styles";

const Button = () => {
  return (
    <ButtonStyle>
      <div>
        <button>
          <ShoppingCart className="material-icons-outlined" />
          장바구니
        </button>
      </div>
    </ButtonStyle>
  );
};

export default Button;
