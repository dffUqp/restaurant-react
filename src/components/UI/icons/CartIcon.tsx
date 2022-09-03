const CartIcon = ({ color = '#FFF' }): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M14.4202 10.9672H5.11555L5.58274 10.0156L13.3452 10.0016C13.6077 10.0016 13.8327 9.81406 13.8796 9.55469L14.9546 3.5375C14.9827 3.37969 14.9406 3.21719 14.8374 3.09375C14.7865 3.033 14.7229 2.98407 14.6511 2.95034C14.5793 2.91661 14.5011 2.8989 14.4218 2.89844L4.5468 2.86562L4.46243 2.46875C4.4093 2.21562 4.18118 2.03125 3.9218 2.03125H1.50774C1.36146 2.03125 1.22116 2.08936 1.11773 2.1928C1.01429 2.29624 0.956177 2.43653 0.956177 2.58281C0.956177 2.7291 1.01429 2.86939 1.11773 2.97283C1.22116 3.07626 1.36146 3.13438 1.50774 3.13438H3.47493L3.84368 4.8875L4.75149 9.28281L3.58274 11.1906C3.52204 11.2725 3.48549 11.3698 3.4772 11.4714C3.46892 11.573 3.48924 11.675 3.53586 11.7656C3.62961 11.9516 3.81868 12.0688 4.02805 12.0688H5.0093C4.80011 12.3466 4.68712 12.685 4.68743 13.0328C4.68743 13.9172 5.40618 14.6359 6.29055 14.6359C7.17493 14.6359 7.89368 13.9172 7.89368 13.0328C7.89368 12.6844 7.77805 12.3453 7.5718 12.0688H10.089C9.8798 12.3466 9.76681 12.685 9.76711 13.0328C9.76711 13.9172 10.4859 14.6359 11.3702 14.6359C12.2546 14.6359 12.9734 13.9172 12.9734 13.0328C12.9734 12.6844 12.8577 12.3453 12.6515 12.0688H14.4218C14.7249 12.0688 14.9734 11.8219 14.9734 11.5172C14.9725 11.3711 14.9138 11.2312 14.8102 11.1282C14.7065 11.0251 14.5664 10.9673 14.4202 10.9672V10.9672ZM4.77649 3.95312L13.7734 3.98281L12.8921 8.91719L5.82493 8.92969L4.77649 3.95312ZM6.29055 13.5266C6.01868 13.5266 5.7968 13.3047 5.7968 13.0328C5.7968 12.7609 6.01868 12.5391 6.29055 12.5391C6.56243 12.5391 6.7843 12.7609 6.7843 13.0328C6.7843 13.1638 6.73228 13.2894 6.63969 13.3819C6.54709 13.4745 6.4215 13.5266 6.29055 13.5266V13.5266ZM11.3702 13.5266C11.0984 13.5266 10.8765 13.3047 10.8765 13.0328C10.8765 12.7609 11.0984 12.5391 11.3702 12.5391C11.6421 12.5391 11.864 12.7609 11.864 13.0328C11.864 13.1638 11.812 13.2894 11.7194 13.3819C11.6268 13.4745 11.5012 13.5266 11.3702 13.5266V13.5266Z"
        fill={color}
      />
    </svg>
  );
};

export default CartIcon;
