const ticketCore = require('../../core/ticket.core');

/**  Create Ticket*/

const createTicket = async(req, res) => {
    let ticket = req.body;
    ticketCore.createTicket(ticket, (err, data) => {
        if (err) {
            return res.status(405).json(err);
        }
        res.status(data.code).json(data);
    });
}

/**  Get all ticekts*/

const getTickets = async(req, res) => {

    let options = null;
    if (req.query.isPageable) {
        let limit = Number(req.query.limit) || 10;
        let page = Number(req.query.page) || 0;
        options = { limit, page }
    }

    ticketCore.getTickets(options, (err, data) => {
        if (err) {
            return res.status(err.code).json(err);
        }
        res.status(data.code).json(data);
    });
}

/**  Get Ticket by ID*/

const getTicketById = async(req, res) => {
    let id = req.params.id;
    ticketCore.getTicketById(id, (err, data) => {
        if (err) {
            return res.status(err.code).json(err);
        }
        res.status(data.code).json(data);
    });
}

/**  Get Tickets by owner user*/

const getTicketsByOwnerUser = async(req, res) => {
    res.json({
        message: `Ticket GET owner: ${req.params.id}`
    })
}

/**  Get Tickets by assigned user*/

const getTicketsByAssignedUser = async(req, res) => {
    res.json({
        message: `Ticket GET assigned: ${req.params.id}`
    })
}

/**  Update Ticket*/

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