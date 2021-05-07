const H1 = {
    fontSize: '1.953rem',
    fontFamily: "Poppins', sans-serif",
    fontWeight: '400',
    lineHeight: '1',
    color: '#121212'
}

const OwnerName = {
    fontSize: "2.4rem",
    fontWeight: '700',
    textTransform: 'capitalize',
    marginBottom: '-1rem'
}

const PetName = {
    textTransform: 'capitalize'
}

const Card = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    // justifyContent: 'space-between',
    minHeight: 'fit-content',
    maxHeight: '70rem',
    width: '850px',
    padding: '50px',
    background: 'linear-gradient(325deg, #acacacff, 1%, #72727233)',
    borderRadius: '50px 6px 6px 6px',
    boxShadow: '14px 14px 10px #121212a9',
    userSelect: 'none',
    borderLeft: '1px solid #bbbbbb',
    borderTop: '1px solid #bbbbbb',
    borderRight: '.5px solid #868686',
    borderBottom: '.5px solid #868686',
    backdropFilter: '45%'
}

const ContainerRow = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '1rem'
}

const ContentContainer = {
    border: '1px dashed #000000',
    borderRadius: '50px 6px 6px 6px',
    margin: '1.5rem 0',
    padding: '0 1rem'
}

const ProfileContainer = {
    height: '160px',
    width: '160px',
    borderRadius: '50%',
    boxShadow: '0px 0px 16px #F5DF4D, 10px 10px 16px #121212 '
}

const PetPicContainer = {
    height: '100px',
    width: '100px',
    borderRadius: '50%',
    margin: 'auto 2rem',
    boxShadow: '0px 0px 16px #F5DF4D, 10px 10px 16px #121212 '
}

const GridContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // gridTemplateColumns: '25% 25% 25% 25% ',
    // gridTemplateRows: '400px 400px 400px',
    // gridAutoFlow: 'row',
    gap: "25rem",
    width: '100vw',
    height: '100%',
    paddingTop: "8.5rem",
    paddingBottom: "8.5rem"
}



export {
    Card,
    ContentContainer,
    ContainerRow,
    H1,
    GridContainer,
    OwnerName,
    PetName,
    PetPicContainer,
    ProfileContainer
}