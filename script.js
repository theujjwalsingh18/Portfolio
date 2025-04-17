window.onloadTurnstileCallback = function () {
    turnstile.render("#myWidget", {
      sitekey: "0x4AAAAAABNFB3eITqqE9LkM",
      callback: function (token) {
        console.log(`Challenge Success ${token}`);
      },
    });
  };