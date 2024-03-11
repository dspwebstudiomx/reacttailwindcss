import { HashLink } from 'react-router-hash-link';

const Tips = () => {
  const scrollWithOffset = (element, offset) => {
    const elementPosition = element.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    });
  }

  return (
    <HashLink to="/#link" scroll={element => scrollWithOffset(element, 80)}>link</HashLink>
  )
}
export default Tips
