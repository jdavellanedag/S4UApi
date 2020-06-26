const express = require('express');
const app = express();
const controller = require('./controllers/ticket.controller');

/**
 * 
 * Routing configuration for
 * Ticket management
 * 
 */
app.post('', (req, res) => controller.createTicket(req, res));
app.get('', (req, res) => controller.getTickets(req, res));
app.get('/:id', (req, res) => controller.getTicketById(req, res));
app.get('/user-owner/:id', (req, res) => controller.getTicketsByOwnerUser(req, res));
app.get('/user-assigned/:id', (req, res) => controller.getTicketsByAssignedUser(req, res));
app.put('/:id', (req, res) => controller.updateTicket(req, res));

module.exports = app;