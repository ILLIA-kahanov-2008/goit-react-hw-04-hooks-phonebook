import PropTypes from "prop-types";
import styled from "styled-components";

const Styles = styled.div`
  .selector1 {
    width: 95%;
    border-collapse: collapse;
    margin: 20px auto;    
  }
  .selector2 {
    background-color: rgb(63, 207, 243);
    text-transform: uppercase;
    color: #fff;
  }
  .selector3 {
    line-height: 2;
   border: 1px solid burlywood;
    text-align: center;
  }
`;
function ContactList ({cbRemoveContact, filteredContacts}) {
  const handleClick = (e) => cbRemoveContact(e.target.id);;
    return (
      <Styles>
        <table className="selector1">
          <thead className="selector2">
            <tr>
              <th className="selector3">Name</th>
              <th className="selector3">Phone Number</th>
              <th className="selector3">Etc.</th>
            </tr>
          </thead>
          <tbody>
            {filteredContacts.map(({ id, name, number }) => (
              <tr key={id}>
                <td
                  className="selector3"
                  style={{ textTransform: "capitalize" }}
                >
                  {name}
                </td>
                <td className="selector3">{number}</td>
                <td className="selector3">
                  <button
                    className="button"
                    type="button"
                    onClick={handleClick}
                    id={id}
                  >
                    Delete contact
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Styles>
    );
}

export default ContactList;

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  cbRemoveContact: PropTypes.func.isRequired,
};
