import styled from 'styled-components';

const Widget = ({className }) => (<div className={className}>I am a transpiled widget!</div>);

export default styled(Widget)`
background-color: red;
padding:40px;
`;
