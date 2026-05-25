const toggleFollow = catchAsync(async (req: Request, res: Response) => {
  const token = await getToken(req);

  const authorId = Array.isArray(req.params.authorId)
    ? req.params.authorId[0]
    : req.params.authorId;

  const result = await UserService.toggleFollow(token, authorId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: result.isFollowing
      ? "Followed successfully!"
      : "Unfollowed successfully!",
    data: result,
  });
});

const getFollowStatus = catchAsync(async (req: Request, res: Response) => {
  const token = await getToken(req);

  const authorId = Array.isArray(req.params.authorId)
    ? req.params.authorId[0]
    : req.params.authorId;

  const result = await UserService.getFollowStatus(token, authorId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Follow status fetched successfully!",
    data: result,
  });
});