import { chakra } from '@chakra-ui/react'
import React from 'react'

export const BackgroundPolygons = () => {
  return (
    <>
      <chakra.div
        display={{ base: 'none', xl: 'block' }}
        animation="float 6s ease-in-out infinite;"
        pos="absolute"
        left="-100px"
        top="100px"
      >
        <Triangle />
      </chakra.div>
      <chakra.div
        display={{ base: 'none', xl: 'block' }}
        animation="float 6s ease-in-out 700ms infinite;"
        pos="absolute"
        right="-150px"
        top="30px"
      >
        <DemiCircle />
      </chakra.div>
    </>
  )
}

const Triangle = () => (
  <svg
    width="256"
    height="399"
    viewBox="0 0 386 399"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M368.344 397.149C368.704 397.001 369.056 396.833 369.398 396.646C369.626 396.532 369.869 396.435 370.08 396.305C370.291 396.175 370.761 395.834 371.102 395.591C371.443 395.348 371.443 395.364 371.589 395.234C372.053 394.84 372.487 394.411 372.887 393.952L382.851 382.333C382.442 382.785 382.009 383.213 381.552 383.615L381.049 383.972C380.725 384.216 380.384 384.459 380.027 384.686L379.362 385.027C379.005 385.206 378.664 385.384 378.291 385.53L377.496 385.79C377.118 385.923 376.733 386.036 376.344 386.131C376.003 386.131 375.646 386.26 375.273 386.325L374.445 386.439C374.024 386.464 373.601 386.464 373.179 386.439H372.319C371.832 386.439 371.329 386.439 370.81 386.325H370.048C369.269 386.212 368.425 386.082 367.63 385.887L68.6795 317.004C57.4504 314.407 47.2599 303.876 45.9617 293.491L10.8627 15.5221C10.5298 13.7034 10.5892 11.8346 11.037 10.0408C11.4847 8.24693 12.3105 6.56943 13.459 5.12054L3.51185 16.7391C2.36334 18.188 1.53757 19.8655 1.08981 21.6593C0.642052 23.4531 0.582635 25.3219 0.915535 27.1406L35.9983 305.109C37.3127 315.494 47.5033 326.026 58.7161 328.622L357.666 397.636C358.494 397.83 359.289 397.96 360.084 398.074H360.847C361.366 398.074 361.869 398.171 362.356 398.187H363.2C363.627 398.212 364.055 398.212 364.482 398.187L365.309 398.074L366.072 397.96L366.38 397.879C366.77 397.785 367.154 397.671 367.532 397.538L368.344 397.149Z"
      fill="url(#paint0_linear_370:3)"
    />
    <path
      d="M28.9881 1.32341C34.7272 2.78779 39.9255 5.86843 43.9656 10.1996L377.999 357.198C392.262 371.997 385.723 390.106 367.63 385.936L68.6794 317.004C57.4503 314.407 47.2597 303.876 45.9616 293.491L10.8625 15.522C9.43457 4.09823 18.5217 -1.04573 28.9881 1.32341Z"
      fill="#FFA54C"
    />
    <defs>
      <linearGradient
        id="paint0_linear_370:3"
        x1="374.023"
        y1="403.429"
        x2="-67.5948"
        y2="95.7644"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BB5D00" />
        <stop offset="0.46875" stopColor="#E67200" />
        <stop offset="1" stopColor="#FF8B1A" />
      </linearGradient>
    </defs>
  </svg>
)

const DemiCircle = () => (
  <svg
    width="253"
    height="159"
    viewBox="0 0 253 159"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M205.028 117.321C205.222 116.883 205.385 116.445 205.563 116.007C205.742 115.569 206.099 114.773 206.342 114.157C206.585 113.54 206.991 112.534 207.299 111.69C207.608 110.847 207.754 110.506 207.965 109.922C208.257 109.078 208.516 108.299 208.792 107.439C208.955 106.887 209.149 106.352 209.311 105.816C209.571 104.924 209.798 104.064 210.025 103.204C210.139 102.749 210.285 102.279 210.399 101.841C210.675 100.705 210.902 99.585 211.113 98.4978C211.113 98.3355 211.113 98.157 211.226 97.9947C211.453 96.7453 211.632 95.512 211.778 94.295C211.778 93.9218 211.778 93.5648 211.892 93.2078C211.973 92.3802 212.054 91.585 212.086 90.7575C212.086 90.3031 212.086 89.865 212.086 89.4269C212.086 88.7291 212.086 88.0314 212.086 87.3498C212.086 86.6683 212.086 86.4411 212.086 86.003C212.086 85.5648 212.086 84.7373 211.973 84.1044C211.859 83.4716 211.859 83.2282 211.81 82.7738C211.762 82.3195 211.632 81.6054 211.535 81.0213C211.437 80.4371 211.372 80.1775 211.275 79.7556C211.178 79.3337 211.015 78.6521 210.853 78.1329L210.512 76.9483C210.334 76.4128 210.139 75.8936 209.944 75.3256L209.506 74.2384C209.279 73.7191 209.019 73.2161 208.76 72.7293C208.5 72.2425 208.435 72.0802 208.257 71.7557C208.078 71.4311 207.624 70.7334 207.283 70.2303C207.121 69.9869 206.975 69.7273 206.796 69.4839C206.269 68.7539 205.7 68.055 205.093 67.3906L185.864 46.2955C186.444 46.9619 186.986 47.6608 187.486 48.3888C187.665 48.6322 187.811 48.8919 187.989 49.1353C188.314 49.6383 188.655 50.1413 188.963 50.6768C189.271 51.2123 189.287 51.3097 189.466 51.6342C189.644 51.9588 189.969 52.6241 190.196 53.1433C190.423 53.6626 190.488 53.8736 190.634 54.2306C190.78 54.5875 191.024 55.2691 191.202 55.8533C191.381 56.4374 191.446 56.6483 191.559 57.0378C191.673 57.4272 191.851 58.125 191.981 58.6605C192.111 59.196 192.16 59.5043 192.241 59.9262C192.322 60.3481 192.419 61.0946 192.5 61.695C192.582 62.2954 192.614 62.5712 192.663 63.0094C192.711 63.4475 192.76 64.275 192.792 64.9079C192.825 65.5407 192.792 65.8004 192.792 66.2548C192.792 66.7091 192.792 67.6341 192.792 68.3318C192.792 68.7699 192.792 69.208 192.792 69.6624C192.792 70.4575 192.663 71.2851 192.581 72.1127C192.581 72.4697 192.582 72.8267 192.484 73.1999C192.338 74.4169 192.143 75.6502 191.916 76.8997L191.819 77.4027C191.608 78.4899 191.365 79.6096 191.089 80.7454L190.732 82.0923C190.504 82.9685 190.277 83.8285 190.001 84.721C189.839 85.2565 189.661 85.792 189.482 86.3437C189.223 87.1551 188.947 87.9827 188.655 88.8265C188.444 89.4106 188.233 89.9948 188.006 90.5952C187.778 91.1956 187.389 92.2179 187.048 93.0617L186.269 94.9116C185.88 95.8365 185.474 96.7615 185.036 97.6864C184.857 98.0921 184.679 98.4978 184.484 98.9035C183.835 100.299 183.137 101.695 182.407 103.122L201.636 124.218C202.383 122.79 203.064 121.394 203.713 119.999C203.908 119.593 204.086 119.187 204.281 118.798L205.028 117.321Z"
      fill="#6D9AFF"
    />
    <path
      d="M25.4439 147.082L26.1742 145.865C27.2127 144.161 28.2675 142.457 29.4196 140.753C30.7935 138.589 32.216 136.426 33.6873 134.262L35.0666 132.331C36.0565 130.92 37.0463 129.508 38.0686 128.112C38.7014 127.252 39.3505 126.408 39.9834 125.565C40.8272 124.429 41.6061 123.309 42.5472 122.173C43.4884 121.037 43.9752 120.356 44.6892 119.447C45.4032 118.538 46.3119 117.451 47.107 116.445L49.395 113.703C50.1902 112.745 51.0177 111.772 51.8128 110.83C52.608 109.889 53.4356 108.981 54.2307 108.072L56.6648 105.33C57.4923 104.405 58.2874 103.496 59.1637 102.587C60.0399 101.678 60.7864 100.802 61.6627 99.9259C62.5389 99.0497 63.3665 98.1247 64.2427 97.2322L66.7904 94.6197L69.4192 92.0071L72.0479 89.4433L74.7416 86.8957C75.6503 86.0356 76.5428 85.2729 77.4678 84.348L80.1777 81.8815L83.0012 79.3663L85.6624 77.0783C86.6847 76.1858 87.7233 75.3095 88.7618 74.4333L91.3743 72.2751C92.494 71.3664 93.6137 70.4415 94.7496 69.549L97.3134 67.5206L101.094 64.616L103.48 62.8472C105.654 61.2245 107.829 59.6018 109.971 58.1089L110.668 57.6059C111.106 57.2976 111.545 57.0217 111.966 56.7134C113.411 55.7236 114.855 54.7337 116.315 53.7763L118.376 52.4457C119.544 51.6668 120.729 50.823 121.914 50.1577L125.159 48.2104L128.047 46.4579L131.293 44.608L134.165 42.9853L137.41 41.2328L140.283 39.7075C141.354 39.1395 142.441 38.6203 143.528 38.0848L146.368 36.673L149.613 35.1477C150.554 34.7258 151.495 34.2714 152.42 33.8658C153.345 33.4601 154.611 32.9246 155.666 32.454L158.424 31.2857L161.67 30.02L164.38 28.9652C165.499 28.5595 166.603 28.2026 167.722 27.8131C168.582 27.521 169.459 27.1965 170.319 26.9206C172.396 26.2553 174.473 25.6224 176.534 25.0545L177.783 24.7299C179.406 24.2918 181.029 23.8699 182.651 23.4967C184.274 23.1235 186.108 22.734 187.828 22.4095C189.548 22.085 190.911 21.8578 192.42 21.6468C193.799 21.4521 195.146 21.2898 196.477 21.1438L197.775 21.0302L200.615 20.9004H201.783C202.74 20.9004 203.665 20.9004 204.59 20.8193H205.564C206.748 20.8193 207.901 20.8193 209.036 20.8193H209.734C210.513 20.8193 211.276 20.9166 212.022 20.9815C213.174 21.0789 214.294 21.2087 215.381 21.3547L216.371 21.4845C217.75 21.6955 219.081 21.9389 220.363 22.231L221.288 22.4744C222.229 22.7016 223.17 22.9612 224.079 23.2371L225.328 23.659C226.091 23.9186 226.837 24.1945 227.584 24.4865L228.801 24.9896C229.531 25.3141 230.261 25.6549 230.975 26.0119C231.3 26.1742 231.657 26.3364 231.981 26.5149C232.987 27.0666 233.994 27.6508 234.935 28.2675C235.892 28.9003 236.801 29.5819 237.677 30.2958C237.953 30.5068 238.213 30.734 238.472 30.9612C239.089 31.4966 239.689 32.0321 240.257 32.5839C240.825 33.1356 241.231 33.5088 241.685 34.0118L222.456 12.9167C222.132 12.5597 221.807 12.2189 221.466 11.8782L221.028 11.4887C220.46 10.9208 219.86 10.3853 219.243 9.86605C219.049 9.72001 218.886 9.54148 218.708 9.37921L218.448 9.20074C217.572 8.48675 216.663 7.82141 215.706 7.18855C214.765 6.57193 213.775 5.98778 212.752 5.43606L212.493 5.29002C212.266 5.1602 211.99 5.06284 211.746 4.93302C211.049 4.57603 210.318 4.23525 209.572 3.91071L209.053 3.65108L208.355 3.40768C207.625 3.1156 206.878 2.83975 206.099 2.58011L205.337 2.28801L204.85 2.15819C203.941 1.88234 203.016 1.6227 202.059 1.39552C201.815 1.39552 201.588 1.24949 201.329 1.20081H201.15C199.852 0.908721 198.521 0.665305 197.158 0.454354H196.931H196.168C195.065 0.308311 193.945 0.178502 192.809 0.08114H192.16L190.538 0H189.856C188.85 0 187.844 0 186.805 0H185.394L182.603 0.08114H181.434H180.59L178.643 0.259638L177.361 0.373239C176.014 0.519282 174.668 0.681548 173.288 0.876272C171.779 1.08722 170.254 1.34686 168.696 1.63894C167.138 1.93103 165.564 2.25555 163.974 2.61255L163.52 2.72615C161.897 3.09937 160.274 3.52126 158.652 3.95939L157.37 4.28393C155.309 4.85187 153.248 5.48474 151.171 6.15005H150.96L148.558 6.97764C147.455 7.36709 146.351 7.72409 145.232 8.14599C144.112 8.56789 143.414 8.8275 142.522 9.18449L139.277 10.4502C138.352 10.8234 137.427 11.2291 136.502 11.6348C135.577 12.0405 134.327 12.5435 133.256 13.0303C132.185 13.5171 131.374 13.8903 130.433 14.3285L127.187 15.8376L124.348 17.2493C123.26 17.801 122.189 18.3203 121.102 18.872L118.246 20.3974C117.159 20.9815 116.088 21.5495 115.001 22.1499L112.112 23.7726L108.867 25.6225L105.995 27.375C104.924 28.024 103.869 28.6569 102.749 29.3222L101.987 29.7928L99.1958 31.6102L97.1511 32.9409C95.6907 33.8982 94.2465 34.8881 92.8023 35.8779C92.3642 36.1863 91.9261 36.4621 91.5042 36.7704L91.3581 36.8678L90.7902 37.2734C88.6266 38.8096 86.463 40.389 84.2994 42.0117L83.3744 42.6771L81.9302 43.7805L78.1331 46.6851C77.6787 47.0584 77.2082 47.3991 76.7376 47.7723L75.5692 48.7135L72.194 51.4558C71.6423 51.894 71.0905 52.3321 70.5713 52.7865L69.5977 53.5978L66.5145 56.2428L64.6971 57.7682L63.8371 58.5308L61.0298 61.046L59.1312 62.7499L58.3037 63.5125C57.3949 64.3563 56.4863 65.1352 55.5938 66.0601L53.6952 67.8289L52.9001 68.6078L50.2713 71.1717C49.6547 71.7721 49.0218 72.3725 48.4214 72.9891L47.6263 73.7842L45.0786 76.3968L43.2126 78.1006L42.4336 78.9444L39.9671 81.6056L38.2308 83.4717L37.4682 84.348C36.6406 85.2567 35.8455 86.1654 35.0341 87.0904C34.4662 87.707 33.8982 88.3399 33.4114 88.9727L32.6812 89.8489C31.8699 90.7901 31.0585 91.7475 30.2634 92.7049L28.6407 94.6359L27.9592 95.4797C27.1478 96.4696 26.3364 97.4756 25.5575 98.4655C25.0383 99.1308 24.5028 99.7799 23.9348 100.429L23.3507 101.192C22.4907 102.311 21.6469 103.447 20.803 104.567C20.3 105.232 19.7808 105.881 19.2939 106.547L18.8883 107.131C17.866 108.526 16.8761 109.922 15.8863 111.334C15.4968 111.901 15.0749 112.453 14.6855 112.956L14.507 113.216C13.0465 115.379 11.6186 117.543 10.223 119.707L10.0932 119.901C9.05468 121.524 8.03237 123.147 7.04252 124.769L6.31233 125.97L5.43606 127.414C4.85189 128.421 4.28395 129.427 3.716 130.433L3.08312 131.52C2.19064 133.143 1.33064 134.765 0.48684 136.388L0 137.313L19.229 158.408C20.2189 156.493 21.2574 154.595 22.3284 152.68L22.945 151.593C23.7401 150.051 24.5677 148.558 25.4439 147.082Z"
      fill="url(#paint0_linear_370:8)"
    />
    <path
      d="M19.1313 158.359C52.2182 94.5222 127.722 33.6709 187.795 22.4418C247.867 11.2127 269.741 53.8411 236.654 117.678L201.701 124.169C224.16 80.8428 209.312 51.91 168.55 59.5367C127.787 67.1634 76.5425 108.461 54.1005 151.771L19.1313 158.359Z"
      fill="url(#paint1_linear_370:8)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_370:8"
        x1="100.121"
        y1="-31.6751"
        x2="122.124"
        y2="93.2242"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4C83FF" />
        <stop offset="1" stopColor="#4C83FF" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_370:8"
        x1="93193.7"
        y1="50723.5"
        x2="92639.1"
        y2="39738.8"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7AA1FA" />
        <stop offset="0.49" stopColor="#215CE3" />
        <stop offset="0.99" stopColor="#254898" />
      </linearGradient>
    </defs>
  </svg>
)