module type Config = {
  let scale: array(int);
  let domUnit: string;
};

module BoxMaker = (Config: Config) => {
  [@react.component]
  let make = (~py=?, ~px=?, ~p=?, ~mt=?, ~mb=?, ~ml=?, ~mr=?, ~children, ()) =>
    <div
      style={ReactDOMRe.Style.make(
        ~marginTop=
          switch (mt) {
          | Some(m) =>
            switch (m) {
            | m when m == 5 =>
              (Config.scale[5] |> string_of_int) ++ Config.domUnit
            | m when m == 4 =>
              (Config.scale[4] |> string_of_int) ++ Config.domUnit
            | m when m == 3 =>
              (Config.scale[3] |> string_of_int) ++ Config.domUnit
            | m when m == 2 =>
              (Config.scale[2] |> string_of_int) ++ Config.domUnit
            | m when m == 1 =>
              (Config.scale[1] |> string_of_int) ++ Config.domUnit
            | m => (m |> string_of_int) ++ Config.domUnit
            }
          | None => ""
          },
        ~marginBottom=
          switch (mb) {
          | Some(m) =>
            switch (m) {
            | m when m == 5 =>
              (Config.scale[5] |> string_of_int) ++ Config.domUnit
            | m when m == 4 =>
              (Config.scale[4] |> string_of_int) ++ Config.domUnit
            | m when m == 3 =>
              (Config.scale[3] |> string_of_int) ++ Config.domUnit
            | m when m == 2 =>
              (Config.scale[2] |> string_of_int) ++ Config.domUnit
            | m when m == 1 =>
              (Config.scale[1] |> string_of_int) ++ Config.domUnit
            | m => (m |> string_of_int) ++ Config.domUnit
            }
          | None => ""
          },
        ~marginLeft=
          switch (ml) {
          | Some(m) =>
            switch (m) {
            | m when m == 5 =>
              (Config.scale[5] |> string_of_int) ++ Config.domUnit
            | m when m == 4 =>
              (Config.scale[4] |> string_of_int) ++ Config.domUnit
            | m when m == 3 =>
              (Config.scale[3] |> string_of_int) ++ Config.domUnit
            | m when m == 2 =>
              (Config.scale[2] |> string_of_int) ++ Config.domUnit
            | m when m == 1 =>
              (Config.scale[1] |> string_of_int) ++ Config.domUnit
            | m => (m |> string_of_int) ++ Config.domUnit
            }
          | None => ""
          },
        ~marginRight=
          switch (mr) {
          | Some(m) =>
            switch (m) {
            | m when m == 5 =>
              (Config.scale[5] |> string_of_int) ++ Config.domUnit
            | m when m == 4 =>
              (Config.scale[4] |> string_of_int) ++ Config.domUnit
            | m when m == 3 =>
              (Config.scale[3] |> string_of_int) ++ Config.domUnit
            | m when m == 2 =>
              (Config.scale[2] |> string_of_int) ++ Config.domUnit
            | m when m == 1 =>
              (Config.scale[1] |> string_of_int) ++ Config.domUnit
            | m => (m |> string_of_int) ++ Config.domUnit
            }
          | None => ""
          },
        ~padding=
          switch (p) {
          | Some(p) =>
            switch (p) {
            | p when p == 5 =>
              (Config.scale[5] |> string_of_int) ++ Config.domUnit
            | p when p == 4 =>
              (Config.scale[4] |> string_of_int) ++ Config.domUnit
            | p when p == 3 =>
              (Config.scale[3] |> string_of_int) ++ Config.domUnit
            | p when p == 2 =>
              (Config.scale[2] |> string_of_int) ++ Config.domUnit
            | p when p == 1 =>
              (Config.scale[1] |> string_of_int) ++ Config.domUnit
            | p => (p |> string_of_int) ++ Config.domUnit
            }
          | None => ""
          },
        ~paddingTop=
          switch (py) {
          | Some(p) =>
            switch (p) {
            | p when p == 5 =>
              (Config.scale[5] |> string_of_int) ++ Config.domUnit
            | p when p == 4 =>
              (Config.scale[4] |> string_of_int) ++ Config.domUnit
            | p when p == 3 =>
              (Config.scale[3] |> string_of_int) ++ Config.domUnit
            | p when p == 2 =>
              (Config.scale[2] |> string_of_int) ++ Config.domUnit
            | p when p == 1 =>
              (Config.scale[1] |> string_of_int) ++ Config.domUnit
            | p => (p |> string_of_int) ++ Config.domUnit
            /* | None => [] */
            }
          | None => ""
          },
        ~paddingBottom=
          switch (py) {
          | Some(p) =>
            switch (p) {
            | p when p == 5 =>
              (Config.scale[5] |> string_of_int) ++ Config.domUnit
            | p when p == 4 =>
              (Config.scale[4] |> string_of_int) ++ Config.domUnit
            | p when p == 3 =>
              (Config.scale[3] |> string_of_int) ++ Config.domUnit
            | p when p == 2 =>
              (Config.scale[2] |> string_of_int) ++ Config.domUnit
            | p when p == 1 =>
              (Config.scale[1] |> string_of_int) ++ Config.domUnit
            | p => (p |> string_of_int) ++ Config.domUnit
            }
          | None => ""
          },
        ~paddingLeft=
          switch (px) {
          | Some(p) =>
            switch (p) {
            | p when p == 5 =>
              (Config.scale[5] |> string_of_int) ++ Config.domUnit
            | p when p == 4 =>
              (Config.scale[4] |> string_of_int) ++ Config.domUnit
            | p when p == 3 =>
              (Config.scale[3] |> string_of_int) ++ Config.domUnit
            | p when p == 2 =>
              (Config.scale[2] |> string_of_int) ++ Config.domUnit
            | p when p == 1 =>
              (Config.scale[1] |> string_of_int) ++ Config.domUnit
            | p => (p |> string_of_int) ++ Config.domUnit
            }
          | None => ""
          },
        ~paddingRight=
          switch (px) {
          | Some(p) =>
            switch (p) {
            | p when p == 5 =>
              (Config.scale[5] |> string_of_int) ++ Config.domUnit
            | p when p == 4 =>
              (Config.scale[4] |> string_of_int) ++ Config.domUnit
            | p when p == 3 =>
              (Config.scale[3] |> string_of_int) ++ Config.domUnit
            | p when p == 2 =>
              (Config.scale[2] |> string_of_int) ++ Config.domUnit
            | p when p == 1 =>
              (Config.scale[1] |> string_of_int) ++ Config.domUnit
            | p => (p |> string_of_int) ++ Config.domUnit
            }
          | None => ""
          },
        (),
      )}>
      children
    </div>;
};
