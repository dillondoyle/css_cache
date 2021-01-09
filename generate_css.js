exports.generate_css = (req, res) => {
    function uuid() {
        return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    let first_name = "Dillon"
    let the_uuid = uuid()

    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);

    res.set({
        "content-type": "text/css",
        "ETag": the_uuid,
        "Last-Modified": date,
        "Expires":date.toUTCString(),
        "Cache-Control": "public, max-age=31536000, immutable"
    });

    the_css = 
    `
    :root {
        --user: { "uuid": "`+the_uuid+`","first_name":"`+first_name+`" };
    }
    `
    res.status(200).end(the_css)
  };