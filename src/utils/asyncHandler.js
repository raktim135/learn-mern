const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
}

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next);
//     }
//     catch(err){
//         console.log("async function call error: ", err);
//         res.status(err.code || 500).json({
//             success: false,
//             message: err
//         });
//     }
// }

export { asyncHandler }