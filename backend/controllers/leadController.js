
import Lead from "../models/Lead.js";

// 1. Create a new lead
export const createLead = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      source,
      status,
    } = req.body;

    const lead = await Lead.create({
      name,
      email,
      phone,
      company,
      source,
      status,
    });

    res.status(201).json({
      success: true,
      message: "Lead created successfully",
      data: lead,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// 2. Get all leads with search and status filter
export const getAllLeads = async (req, res) => {
  try {
    const { search, status } = req.query;

    const filter = {};

    // Search by name (case-insensitive)
    if (search) {
      filter.name = {
        $regex: search,
        $options: "i",
      };
    }

    // Filter by status
    if (status) {
      filter.status = status;
    }

    const leads = await Lead.find(filter).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: leads.length,
      data: leads,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// 3. Update an existing lead
export const updateLead = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedLead = await Lead.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedLead) {
      return res.status(404).json({
        success: false,
        message: "Lead not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Lead updated successfully",
      data: updatedLead,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// 4. Delete an existing lead
export const deleteLead = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedLead = await Lead.findByIdAndDelete(id);

    if (!deletedLead) {
      return res.status(404).json({
        success: false,
        message: "Lead not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Lead deleted successfully",
      data: deletedLead,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
