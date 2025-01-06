const HttpError = require('../models/http-error')
const mongoose = require('mongoose');

const User = require('../models/user');
const Branch = require('../models/branch');
const TeachingGroup = require('../models/teachingGroup');
const AcademicYear = require('../models/academicYear')
const Class = require('../models/class')
const TeachingGroupYear = require('../models/teachingGroupYear')
const Student = require('../models/student')
const Teacher = require('../models/teacher')
const Attendance = require('../models/attendance');
const attendance = require('../models/attendance');
const teachingGroupYear = require('../models/teachingGroupYear');


const getDashboardData = async (req, res, next) => {

    let dashboardData = {}
    try {
        const branchCount = await Branch.countDocuments()
        const teachingGroupCount = await TeachingGroup.countDocuments()
        const classCount = await Class.countDocuments()
        const studentCount = await Student.countDocuments()
        const teacherCount = await Teacher.countDocuments()
        const attendanceCount = await Attendance.countDocuments()

        const attendancePresentCount = await Attendance.countDocuments({ status: { $in: ['Hadir', 'Terlambat'] } })

        const attendancePercentage = attendancePresentCount / attendanceCount * 100


        dashboardData = {
            "PC": branchCount,
            "Kelompok Ajar": teachingGroupCount,
            "Kelas": classCount,
            "Peserta Didik": studentCount,
            "Tenaga Pendidik": teacherCount,
            // attendanceCount,
            "Kehadiran": attendancePercentage
        }

    } catch (err) {
        return next(new HttpError('Internal server error occurred!', 500))
    }

    res.status(200).json({ message: 'Success', dashboardData });
}

exports.getDashboardData = getDashboardData