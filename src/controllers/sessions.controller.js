import SessionService from "../services/Sessions.service.js";

export const registerController = async (req, res) => {
    try {
        const result = await SessionService.register(req.body);

        return res.status(201).json({
            status: "success",
            payload: result
        });
    } catch (error) {
        return res.status(error.status || 500).json({
            status: "error",
            message: error.message
        });
    }
};

export const createSessionController = async (req, res) => {
    try {
        const result = await SessionService.createSession(req.body);

        return res.status(201).json({
            status: "success",
            payload: result
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: error.message
        });
    }
};

export const getAllSessionsController = async (req, res) => {
    try {
        const result = await SessionService.getSessions();

        return res.status(200).json({
            status: "success",
            payload: result
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: error.message
        });
    }
};

export const getSessionByIdController = async (req, res) => {
    try {
        const result = await SessionService.getSessionById(req.params.id);

        if (!result) {
            return res.status(404).json({
                status: "error",
                message: "Session not found"
            });
        }

        return res.status(200).json({
            status: "success",
            payload: result
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: error.message
        });
    }
};

export const getSessionsByEventController = async (req, res) => {
    try {
        const result = await SessionService.getSessionsByEvent(req.params.eventId);

        return res.status(200).json({
            status: "success",
            payload: result
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: error.message
        });
    }
};

export const deleteSessionController = async (req, res) => {
    try {
        const result = await SessionService.deleteSession(req.params.id);

        if (!result) {
            return res.status(404).json({
                status: "error",
                message: "Session not found"
            });
        }

        return res.status(200).json({
            status: "success",
            message: "Session deleted successfully",
            payload: result
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: error.message
        });
    }
};