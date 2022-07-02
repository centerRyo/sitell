import React, { memo, VFC } from 'react';

type Props = {
  color?: string;
};

export const CalendarMonthly: VFC<Props> = memo(({ color = '#fff' }) => (
  <svg
    id='prefix___x32_'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 512 512'
    xmlSpace='preserve'
    opacity={1}
  >
    <path
      d='M118.612 89.298c9.482 0 17.176-7.686 17.176-17.168V17.17c0-9.483-7.694-17.17-17.176-17.17s-17.177 7.687-17.177 17.169v54.96c0 9.482 7.695 17.169 17.177 17.169zM255.992 89.298c9.482 0 17.177-7.686 17.177-17.168V17.17c0-9.483-7.695-17.17-17.177-17.17-9.483 0-17.176 7.687-17.176 17.169v54.96c0 9.482 7.694 17.169 17.176 17.169zM393.372 89.298c9.483 0 17.176-7.686 17.176-17.168V17.17C410.549 7.687 402.855 0 393.372 0c-9.483 0-17.176 7.687-17.176 17.169v54.96c0 9.482 7.694 17.169 17.176 17.169zM186.593 405.072c32.102 0 56.031-21.572 56.031-54.189 0-23.421-13.152-38.94-23.667-43.411v-.524c13.152-8.68 19.982-22.102 19.982-37.097 0-28.942-19.196-49.456-52.608-49.456-28.942 0-48.678 16.575-52.624 38.146-.262 1.573.524 2.892 2.112 3.154l22.357 5.264c1.588.263 2.637-.262 3.161-1.842 3.161-11.048 10.793-18.418 23.945-18.418 14.988 0 23.93 9.999 23.93 24.207 0 15.782-10.253 26.043-26.042 26.043h-7.108c-1.572 0-2.622 1.048-2.622 2.629v20.784c0 1.58 1.049 2.629 2.622 2.629h7.632c17.623 0 29.203 11.055 29.203 29.203 0 15.264-9.729 26.574-26.304 26.574-14.74 0-23.421-8.419-27.106-18.942-.524-1.58-1.836-2.104-3.146-1.842l-22.897 5.266c-1.572.524-2.359 1.834-2.097 3.415 5.521 24.468 27.354 38.407 55.246 38.407zM296.836 277.744l27.352-19.204h.524v141.011c0 1.58 1.064 2.63 2.637 2.63h24.207c1.573 0 2.622-1.049 2.622-2.63V225.914c0-1.573-1.048-2.629-2.622-2.629h-22.372c-2.097 0-3.408.524-4.734 1.58l-28.663 20.784c-1.326 1.048-1.85 2.105-1.85 3.678v26.836c.001 2.106 1.311 2.63 2.899 1.581z'
      fill={color}
    />
    <path
      d='M427.001 44.899h-2.714v27.23c0 17.038-13.861 30.906-30.914 30.906-17.038 0-30.914-13.869-30.914-30.906v-27.23h-75.551v27.23c0 17.038-13.877 30.906-30.914 30.906S225.08 89.166 225.08 72.129v-27.23h-75.552v27.23c0 17.038-13.876 30.906-30.914 30.906S87.698 89.167 87.698 72.129v-27.23H85c-37.082 0-67.133 30.059-67.133 67.133v332.835C17.867 481.941 47.918 512 85 512h342.002c37.066 0 67.133-30.058 67.133-67.133V112.032c-.001-37.074-30.068-67.133-67.134-67.133zm23.853 394.873c0 15.973-12.99 28.964-28.956 28.964H90.103c-15.973 0-28.971-12.99-28.971-28.964V143.116h389.722v296.656z'
      fill={color}
    />
  </svg>
));
