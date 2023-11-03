export const welcome = (req, res) => {
  res.json({
    data: "hello from nodejs api from routes yay",
  });
};

export const preRegister = async (req, res) => {
  // create jwt with email and password then email as clickable link
  // only when user click on that email link, registration complete
  try {
    console.log(req.body);

    const emailSent = true;

    if (emailSent) {
      return res.json({ ok: true });
    } else {
      return res.json({ ok: false });
    }
  } catch (err) {
    console.log(err);
    res.json({
      error: "Something went wrong. Try again.",
    });
  }
};
