const data = [
  {
    name: "kamran",
    prof: "data:image/jpeg;base64,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",
    cover: "https://imagizer.imageshack.com/img921/9628/VIaL8H.jpg",
    frd1url: "/porfile/0",
    stories: [
      {
        post1:
          "https://images.unsplash.com/photo-1536782376847-5c9d14d97cc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        post1:
          "https://images.unsplash.com/photo-1430990480609-2bf7c02a6b1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        post1:
          "https://images.unsplash.com/photo-1453060590797-2d5f419b54cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyZWV8ZW58MHx8MHx8fDA%3D",
      },
    ],
  },
  {
    name: "amman",
    prof: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlgMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAFBgMEBwABAv/EAD0QAAIBAwMBBQUGBQMDBQAAAAECAwAEEQUSITEGEyJBURRhcYGhFTJCkbHBB1LR4fAjJPEzgpIlQ2Jyc//EABkBAAIDAQAAAAAAAAAAAAAAAAMEAAECBf/EACMRAAICAgIDAAIDAAAAAAAAAAABAhEDIRIxBCJBExQjM2H/2gAMAwEAAhEDEQA/AFQLzih9wuJDRgJzmht0mZSBQggR0fnuyPhTrbjMS59KWOzFn3mGJ6eVOKKqgKB0oGTsJAj212ypJHVBzXnex/zChBKZ8BK+1XmviS4RcY5qVHBXceBjk1CcXVir2u1CaB4YotyhH3Mc4BGOnvpYub9mXZBJumfnci4KetS9pLz7TmuSwdXDFkAPG0eX5ZNCW2QNhFeO3xuDqMlvr16cUxGNIDJh3s9qWo6VOEdHRSMgOPC3yrTtJ1S2voAVkiEuASivu6+Y9RWN3GpSXUNtFagFyCGA6n/7E8D5Gr1vdwWxS6d5o3KYcKeSoxnoccdQf71JYlJEUqNowK92g0G0DVlvou5eeOS4jUM20YyDjB+efzzRhDmkpJp0wqPkxBuTXhiWpvKoQx3YqiEbQpgkiqUvdZ4Wr1yCUIWhWTyrjkVpRspujiUByFwK6vCygY869rXEnIQou8bapGWbgcUdtdAtDHuvGw59+Ki0BPatVhDKCoGah7eTPDqEcKMQoXJxTb2wURi0rTLCy4jlPJ82olc26bcwtn51memXjg5LMfma0zQisulrIw5IzWJo1Fgq9hncgJz61XFtKq5kbkUc3qOuKC3l7tn246+VBY1ibLFpau6jNedopvYdAuWX7zL3Y/7uP61Y0+5yMYqLtLp5msEvbqdUt7du87p1JV2yFBOPLk8edRFT5SlxM1mAjjMpIwV4YnBB/wA4qpFeAh9myMvwQRwxPmfSjd+v2navdW2mLCqFt8kad2GUeq9Byeo9DQNdHu7lHltYZGVfvYGR8M0zGaaAZMUoOiSC32sJUcOAfw4OPivmPhVPVFjG57abY4bJUdPLyoxa2t0tjGJ4AjIdob8QofqZt4gVl3CQdNoIDVamr0ZcJJW0EuyfaZ7S9zbwhThU2Eg4Xj8hWxaH3mqwiSEAD1zkfSsN7P6fea1cypp1rzEvidfAkYx1Y46+7qa3f+Glmtlo4iNxJcSx+FmPCr7lHp9aHkgpMpSpBe20iTf/AKxXpXPpMfetuOPTBq5baiZb14NmNuefWoNXMkjqiHbgg5FVwilorlKwPqVlJZruzuQ0HMRbLEc03a0m/TwT5YNLbY2kChSXF6Nx2CJEYnjNeV9TzGJ8EV1aozoXuxUr/asYYAeE18dvY/8A1ZT6pVbslcH7ZtxxnkGiX8QoyL63ZfNcUxKrMR6F3QYhJf8AdnlRWp6VCF0/YvQAjFZn2aXZqZLcZxWlabKPZ3APQmsyNxBl1IqSEZJ9cUPnSGSVSSBXkN2k+oTJnJUkYoxp2gi7lFxcIUhU8L0z7zSjdD0I0iXTLISsuwERgeN/2Hvojq5hW1xIxVGG3jGQPdUNzq9nZv3CbVjiHIH6Ut6zrD31tI4XaoU7R5msOQaGNrbKF/ObWb7Mt5zIksg76ZwMuoYlV+XPzNGtRvLbSrWNEtneLguI8DHHJrL7jVZ47wAKWLPuHHT6eppqttSS9ijlu2ECDiQOeBjrxRZwaSAQyJydkl7dadc3Pc20ssbyHiOVMFvh5E/A1esdDs764isJLSOVgC7KxGWx0/Mn6UB03TrHVp5ZY7iF1jlYta48SLu446YI9Kamv4pIhGbS3jkhwIpofAy49cfe+dVaiaalNDXpumm3sDYpbLaLjARVCge/iivZjSn0y1kjeRX3NuGBSjpHaN1LxXLGQ5yrscn4Zpo0a9N/3gRzgfSiY8kWxXLilFWX7WxMd80xkGGzxivu+t9zB1bBx51C1vMnj3sQDiq15M0c0YDHketE+APpbulL6cVbk7aUbqTuowfP1pwTMlowJz1pI1UnuyB60OXZuJQuZdxBNdXixFoFZ+tdW7iZpgjS9H9g1OGZ1YFW54qx20miuGhKkZXNMd12u0cztEuS3RcJ1+lJfamWS4ue8MTJER4cjrQ4WMTcX0gHb3Hs16JAeMinrs3qK3kM6g9D0+VJmj6TLqt+IY2Koo3SvjO1c/qegrTdO0uz0+EW9pCEX8XPiY+81MudQ0uyYsLnv4Dez2gLaSXt9dZmeSQsiL+FfTnz99GtVk1G5hWOzjWJcceP9aKRwm1j2FRh0yTnoPShV7d7IgQdpHApaUn9G8aXUekDoezhjRnuT3sr8nPTNB9e0nUVtAlusDbmwFQ+L603Xd+R5k591UMSXRwz7VB8qgZX9Mev7S/F2IZll3xn+X7te6Xp95cXLITHMmct3uTitOutLQ3hBlIMp2sxGciotS0y2tLmRrKIBGxkr7qKs7qgMvHV2Bbeyt7WGRYLeFHcAF0XBIHr618yPujIHUVekIRTuXA8yfSqLrmRsDAbpxWJO9mkqIEkkDgjOa0D+HLSOLov90FQPrn9qRUUxXLo5UgKGU+v+Yp57F3C2t17IW5nTeOOCcZ/SrhSmgeZOWN0PZP+2PwpP1i+EV9Zof8A3CRTQZP9gx91JOugPf2Bb8Lkj8qdkc2I4WfNv7sUm6ogE0qHjxcU7W8sRtEAPOwUm64gF/IPnQ5I0mC5ZkVAp9a6o5ogcV7WaNWJVlcLJqFqcH765A+NOHa+1eexgFrEWcnoopB02cR3EeDyCMVqOgTe13USTDIKedFUVGkU5OTtlT+H1jJa6XdPNHtnlnIII5CrwP3NHpJEt0J/EPWoNRl+y7h1QcE7gPdQi/vt7swYbT5Zrm53s6njw9UELzWpCGBPQYBoHe30sxUMw25xihl/qKjIVhx15qlYXcmpajHbQAeE7nY9FHvrCU3thrjHSHNJe/CknkDyqx32yMLH1Pn510VvDbQKAdxx5V25PIBanIukylfpiEsSdx5qYASW8bmTPeJkEV83hVoz1Pv9aF22oqq+z7P+l4QfLFU7LskntlUkuSzepND5kwxP5VcnvEfjq3uqA211Og7uF3JOFQDljW48pdApuK7KDsJLyVVPKooP5Z/eiuhaj7NPayuQDA+Afcc/3oFrlvddndW9olUvBLgOT0BA5B/LiorvXLGMxLZ5lknB3hRwlHeN6aARyRdpmz2uox3Vi4T34PrSx2oicJBIjYZHBod2X1GRrYQM5whypJ8vSpO1180sKRRNg5wSKPGTkhLJDhIatMvMQQg+IkYNCNdfdesxGOK++yuVsoN7hmx1NE+0mgzXcImhlVW4yuPI1tJsG2Kh8fTB+FeVIbb7BujBdMZA67lJrqlFGUWRxcxZ/mH61uGkW0Ua21wqheMnHwrCYZG79GA6MK3+wiZdHhJxyn7VuTIlsodo/HEhABlBySRnIPlSFrDzTTdzbq28nG0cYp3gu47i6kkkBMkaDw++rNstvJ31w8SF8YztrkuVzO0o1BJGXXGh6j3e+Zu7BBwA2TxUX8O7yCOa4tZzi5ySWJ5YU29o7tUnjjUAbYyTj3/8VlRYxag7RkoRKSpHBHNMYveDTA5P45Jo2GW+RQADiqzXwyctx60lW2tXEeFu4TMPJ4zz8xX3NrwZj3VtMFA57zGAflQvwML+dUOJe5uYJJIUIijXLyMcKB8aW5TG90ytcOhIBbYMn9K6zvk1CHub5nMedwSLIH5eZo0sg0+4iMNukMs42hXPIAxj9K00o6RSuW2VLOHUrHZPEsYjIyrTgFiPgKK6DqNxL2mspLyYyYLBABhVOxvIV11HeXiEyFIo1OSwfcz/ADwAKi0eJZdZtRvCqpcg/wDYf3xWoZG3QPLjSi2F+2emx6lo95cuRuhTeFHmB1+may22tFUASKGMf3fDjFaxqGl3dyjRxThonUgj5VnUkeyV0dSHBww94NNPoTxbCOlMYRGck4PrTbpGkStayNfOJGflWx5eVKsCDugwHhx09DRC21TU4r22ht4mmt9g3YHTk+dAxS9qD+RH1Uhv7JRQpA6SN4o5Gxk586ZLq7LhEL4AIpehgAjEqnuy2CQKm1a5WC1SZxhRzmmYyoRas+O21m04tpY1yeldQLtN2xkhhto0tmZeofyrqsyZiYO7nKpyA+BW1WOpINHgDkZ2rWUroWrpesfZsr3hIOfLNPNjbXKwwpKu3lc0O6QVezDT6dbr31wuVkk492PSh3fiKN41BHOSc+WKv3ryd1tBDKB9zp881n/ajVJNPEtkrSSSygFvDgopxx7zSLjylSOtF8Y2yO7nOp6rsLZEr548kH9v1r3tFo8OoO08SIky8llGC3pVvsZbRrHJPcEd9KvBI+6vp86+lvUTWPZ3bhyRn5U9igoQObmyueS0AYI3mjSEKxcHwMOoPpU8LnT7sfatv3aryQ6HB+INNnZnSre5un9oQMrNxnyr3WEuLW7Ny7F1hOFAG5iB0HFJpnRS2Dm7Q6ezK8Hs654UABRVLWzcT6zYxWcTTLGhZvIyMepGfIYAH96Jy61pissgigjm/E7AA59/pVc3Hea9ZywOCqQkmQL4ST5A+eP3q46TI7bVlhLv/YSJc28yXJI2RshAx6k9KEW9xIb1H/CoZVC8UfvZg1i9zIRnO1eOp9BVLT4h7Zp5I++wU5HqCKuLprQPIrT2E9OvbvdGAx27hwaH9ttFaC4XUrfiOU/6o6bW9fgf1pui0gpIrHgA0Rv7C3ubbu7l8owwVB8qZ20c9S4sy2zEpwrcKepxRB9bGh2pHcq7SPhDjpivLlBp2ovZ47xQchx+JT0qQ6fBrdxDbTBo8eMYP3vdQI3HIrHsjUsLotaZqmq31u8uwbSeBmit3fyS6TGLy3IhUjvGxnao6nHnRTTNHgsIe5RjjFXLq3gk0+S0bDI6FWGfIjBphdnO+Gd3uuaU8UapLJJjqrW0WB8M11G4+w2hR/eslb4yv/WuovNGKGIWaDnCn1NfcsKmI4HiAyuPWrKx8DnyqRIlOQfPjmgBUwJLMrOzcAE8j0P/ADSt2ks45h7QP+qr53eeMDj6fSieqKkNw0sbBHYZbOcD1qi0q3dswAYqFwNwxn60lKVSOxxTiVrjuE0GxA3LMYEDMowcgYP6UIjt4h/q5JkU5DGjkV5axxTWN4QO5lOCfIEA/qTQu/vtLsoAIJVeWaVIh4s7ATgt8hmuhj3E4+RcclDN2UlSSMMhBPGSKl1iQrcJJxhHDc+6hdtY3UU7XNhMEI5MT8owAwPh0xXzc38t6jxm3YOU2sMHg1z6+I6zdbZb1LUNOkdZLiOF5Mc+HlqFMy3lxbu8IKMjqqq2NoGOa8S2sZY4lngZZDyVUFfoK+7WRIsR/e7tCiEHG3nkfHp+VFaVWCi23RObGJISkJldIwWBeQsF9cZ6VY0GJLqeyDsq4kDAk+nOPpVYCWSwki71grHxLnrmhutX8Nhbd2zDwrtA44Ppj4VUVbRJtU7NZ2H8XApP1u7kN0VVmKr76G/wz7TS3Wi3WmX87S3VqO8iaRsloz1GTycH6EVelBYkyLtJOeaed/Tlgm6ja5ZGcEbevwopY23czW7798YPIA8vOqt5KsKbiy8c9aM2oVLUy94hBGRz5UtlVUx7xncXENXjQRrtiY7qoRuVJJJqay7i6iBVgWHX4VM1smOMURNvYrKPF0ykJXJyTxXVYNrzjIrqumZ0KWg63q99exqoDwZ8begrQ08SD1xQOwhhsIxHBGAAMDAo3abygeTAq1tk6FHtFC0N3LGWYqfGE6gg+786D901v3exj3bfjB/Lj8+tOfaaAzW3t8A8dr97HUoeuPh/WglpGk6GVcAEjehAIX/OaSzw4yOr4+RTxr/BZbRhq51OR5GD+0qoA94Of0pS7W6ONKumhiw0cIQSN/8ANgTjHw2/nWu9lIIRNqIOCzSh+fi39qUO0ixPr96kyho5ZzuQ9CAAB9BT3ju0jm+QvdixoXbC/wBLjEUym6hH3Q74ZR7j6fHNG5O1ulzhZY5HgnHWORD4x6bhxSdqscMGpXEMKkIjYHOecVSIUpvUg+7zok/GhPZIeTkgqNCGtWVwwl9rQKueCehxjj51WXVLWAIs15EEyxADZx8az9omLhWXryMkc1cso7SUiO9gud+/IeMjYVx90/Xmsfqqqs1+1K7oab7tda9yRZt34zywUquf3x6UqTXUlzKZJmZmYk/PNENR1MXWl31tFEscENxEuz0BPl6YK4oK7IzII/5qNjwxh0Bnmlk7GPshOkevwpLIY0kPclh5BsA/tWqXnZKRhn7Qn/8AKsOR2W5JU4JAI+Nbx2R1wa1oltKxJmChJc/zDj9qrItmUA37GiabZNfTMPQtUus2kGj6NNbw3LSO0Z2ZbOwj/POmG7uUtJWkkGVpNvJd6XkVrCkiznCbxjYMdc+v60tNN6GvHai27D/ZWUzrE6Mu14A7behPHSmMilPQLmHTY0jUs6xxLDGDnhR76NjV1YcI3NSNxK8iUZztBINg11DG1JAcsMZrytcmBpBGyjUycjOPWrty52BRwMeVe11aj0ZfZ5bqPZ5AeQVPWku0JgvmgjJEe9lx7s4ryuoHkr1Q74XbLWkyMNduwDgNHz8mwKU9XPe9oLsvyQ7c11dRfF6BeV/YxD1TjULo+YlaqacMceddXU4hU8l5Yfr5iiOjOW1jTgTwzEn/AMTXV1WQh1EBI9VC+cqE5/8A0P8AWhdqMyJ+ddXVEUuy5jEiEdcfvWk/womcS3kGf9POcfKurqxPo0hs11juAoTDGpB4FeV1KsITQxK0oBFG4LeMRjiurqoh8yWkLHxLmurq6oQ//9k=",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZtyYTgg5bXVoQC5IMtvfxdOo3oEyK1nxAPA&usqp=CAU",
    frd1url: "/porfile/1",
    frndprofile:
      "data:image/jpeg;base64,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",
    stories: [
      {
        post1:
          "https://media.istockphoto.com/id/610576810/photo/athlete-muscular-fitness-male-model-pulling-up-on-horizontal-bar.webp?b=1&s=170667a&w=0&k=20&c=Y2EHADkccaFU1I93zAygYCzfmzg9ox-3n61U5s5RkPw=",
      },
      {
        post1:
          "https://media.istockphoto.com/id/629422920/photo/kettlebell-in-hands.webp?b=1&s=170667a&w=0&k=20&c=5VO-82wL8hXihvV76Qxbc__bWcIGu2-tDWgDtHryaLY=",
      },
    ],
  },
  {
    name: "Huzaifa",
    prof: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ70rIlXrIbfSGJPs3X1emK0P3iEY_ObYDDCQ&usqp=CAU",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd6WkUKD5tTM0w5tADvwSiRdw2_zvrSo3P_A&usqp=CAU ",
    frd1url: "/porfile/2",
    frndprofile:
      "//encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ70rIlXrIbfSGJPs3X1emK0P3iEY_ObYDDCQ&usqp=CAU",
    stories: [
      {
        post1:
          "https://images.unsplash.com/photo-1621750627159-cf77b0b91aac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvZHlidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        post1:
          "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9keWJ1aWxkaW5nfGVufDB8fDB8fHww",
      },
    ],
  },
  {
    name: "M.Ali",
    prof: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    cover:
      "data:image/jpeg;base64,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 ",
    frd1url: "/porfile/3",
    frndprofile:
      "//images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    stories: [
      {
        post1:
          "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJvZHlidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        post1:
          "https://plus.unsplash.com/premium_photo-1663036880678-62ae2e87c4c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJvZHlidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      },
    ],
  },
  {
    name: "ahmad",
    prof: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJNLl8R2R9pOLsHuS0ljA493CF-OXKCOXXSQ&usqp=CAU",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtwYsNNB74b1cy4Cwh2vFIRUP2LnGXddxQ_g&usqp=CAU",
    frd1url: "/porfile/4",
    frndprofile:
      "//encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJNLl8R2R9pOLsHuS0ljA493CF-OXKCOXXSQ&usqp=CAU",
    stories: [
      {
        post1:
          "https://images.unsplash.com/photo-1627063383848-990b09ca1617?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJvZHlidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        post1:
          "https://images.unsplash.com/photo-1430990480609-2bf7c02a6b1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D",
      },
    ],
  },
  {
    name: "Muddsir",
    prof: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRORfGBXJ5yve57GcxpeRsnmGMH1sHkRL54Mw&usqp=CAU",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl4xdytWd-7Sd7sMODEFnoSb7V9PCLo9zX8A&usqp=CAU",
    frd1url: "/porfile/5",
    frndprofile:
      "//encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJNLl8R2R9pOLsHuS0ljA493CF-OXKCOXXSQ&usqp=CAU",
    stories: [
      {
        post1:
          "https://images.unsplash.com/photo-1604233098531-90b71b1b17a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJvZHlidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        post1:
          "https://media.istockphoto.com/id/1369898029/photo/young-indian-boxer-hitting-punching-bag-with-gloves-at-gym-concept-of-weight-loss-body-care.webp?b=1&s=170667a&w=0&k=20&c=v505hNRPby5WSxxoSKJ5qVTKqkYCIYRhCtUuZiMtDN4=",
      },
    ],
  },
];

export default data;