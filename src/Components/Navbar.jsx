const Navbar = ({ setCategory, setCountry }) => {
  const handleCountryChange = (event) => {
    const countryCodes = {
      1: "us",
      2: "in",
      3: "au",
      4: "ca",
      5: "uk",
      6: "de",
      7: "fr",
      8: "jp",
      9: "cn",
      10: "br",
      11: "ru",
      12: "it",
      13: "es",
      14: "mx",
      15: "kr",
      16: "za",
      17: "nl",
      18: "sa",
      19: "tr",
      20: "ch",
      21: "ar",
      22: "se",
      23: "pl",
      24: "id",
      25: "be",
      26: "no",
      27: "at",
      28: "th",
      29: "dk",
      30: "fi",
      31: "gr",
      32: "pt",
      33: "ie",
      34: "nz",
      35: "cz",
      36: "hu",
      37: "ua",
      38: "my",
      39: "ph",
      40: "sg",
      41: "cl",
      42: "pk",
      43: "vn",
      44: "eg",
      45: "il",
      46: "co",
      47: "bd",
      48: "ng",
      49: "pe",
      50: "ro",
      51: "ve",
      52: "iq",
      53: "dz"
    };
    const selectedCountry = countryCodes[event.target.value];
    setCountry(selectedCountry);
    console.log(selectedCountry);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">Sathya Seithigal</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav" style={{ cursor: "pointer" }}>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("technology")}>Technology</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("business")}>Business</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("health")}>Health</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("sports")}>Sports</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("entertainment")}>Entertainment</div>
            </li>
          </ul>
          <select className="form-select form-select-sm" aria-label="Small select example" onChange={handleCountryChange}>
            <option selected>Select the country</option>
            <option value="1">USA</option>
            <option value="2">India</option>
            <option value="3">Australia</option>
            <option value="4">Canada</option>
            <option value="5">United Kingdom</option>
            <option value="6">Germany</option>
            <option value="7">France</option>
            <option value="8">Japan</option>
            <option value="9">China</option>
            <option value="10">Brazil</option>
            <option value="11">Russia</option>
            <option value="12">Italy</option>
            <option value="13">Spain</option>
            <option value="14">Mexico</option>
            <option value="15">South Korea</option>
            <option value="16">South Africa</option>
            <option value="17">Netherlands</option>
            <option value="18">Saudi Arabia</option>
            <option value="19">Turkey</option>
            <option value="20">Switzerland</option>
            <option value="21">Argentina</option>
            <option value="22">Sweden</option>
            <option value="23">Poland</option>
            <option value="24">Indonesia</option>
            <option value="25">Belgium</option>
            <option value="26">Norway</option>
            <option value="27">Austria</option>
            <option value="28">Thailand</option>
            <option value="29">Denmark</option>
            <option value="30">Finland</option>
            <option value="31">Greece</option>
            <option value="32">Portugal</option>
            <option value="33">Ireland</option>
            <option value="34">New Zealand</option>
            <option value="35">Czech Republic</option>
            <option value="36">Hungary</option>
            <option value="37">Ukraine</option>
            <option value="38">Malaysia</option>
            <option value="39">Philippines</option>
            <option value="40">Singapore</option>
            <option value="41">Chile</option>
            <option value="42">Pakistan</option>
            <option value="43">Vietnam</option>
            <option value="44">Egypt</option>
            <option value="45">Israel</option>
            <option value="46">Colombia</option>
            <option value="47">Bangladesh</option>
            <option value="48">Nigeria</option>
            <option value="49">Peru</option>
            <option value="50">Romania</option>
            <option value="51">Venezuela</option>
            <option value="52">Iraq</option>
            <option value="53">Algeria</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
