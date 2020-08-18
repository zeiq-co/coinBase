import styled from 'styled-components';

const Container = styled.div`
  justify-content: space-between;
  margin-bottom: 3rem;
  .icon {
    height: 32px;
  }
  .name,
  .right {
    margin-top: 0.3rem;
  }
`;

const UpdateItem = ({ item }) => (
  <Container key={item.id} className="is-flex">
    <div className="media">
      <div className="media-left">
        <figure className="image is-32x32">
          <img src={item.image} alt="bitcoin" className="icon" />
        </figure>
      </div>
      <div className="media-content">
        <p className="subtitle is-size-6 name">{item.name}</p>
      </div>
    </div>
    <div className="right">
      <p className="subtitle is-size-6 has-text-right">{item.title}</p>
      <p className="subtitle is-size-6 has-text-right">{item.subtitle}</p>
    </div>
  </Container>
);

export default UpdateItem;
