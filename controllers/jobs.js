
const getAllJobs = (req,res) =>{
    res.send('Get all jobs');
}

const getJob = (req,res) =>{
    res.send('Get job');
}
const createJob = (req,res) =>{
    res.send('Create Job');
}
const updateJob = (req,res) =>{
    res.send('Update job');
}
const deleteJob = (req,res) =>{
    res.send('Delete job');
}

module.exports = {
    getAllJobs,
    getJob,
    createJob,
    deleteJob,
    updateJob
};