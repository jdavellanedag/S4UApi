// Create Ticket

const createTicket = async(req, res) => {
    res.json({
        message: 'Ticekt POST'
    })
}

// Get all ticekts

const getTickets = async(req, res) => {
    res.json({
        message: 'Ticket GET'
    })
}

// Get Ticket by ID

const getTicketById = async(req, res) => {
    res.json({
        message: `Ticket GET: ${req.params.id}`
    })
}

// Get Tickets by owner user

const getTicketsByOwnerUser = async(req, res) => {
    res.json({
        message: `Ticket GET owner: ${req.params.id}`
    })
}

// Get Tickets by assigned user

const getTicketsByAssignedUser = async(req, res) => {
    res.json({
        message: `Ticket GET assigned: ${req.params.id}`
    })
}

const updateTicket = async(req, res) => {
    res.json({
        message: `Ticket PUT: ${req.params.id}`
    })
}




module.exports = {
    createTicket,
    getTickets,
    getTicketById,
    getTicketsByOwnerUser,
    getTicketsByAssignedUser,
    updateTicket
}