import React, { useEffect, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";

export const BugButton = () => {
  const [error, setError] = useState<boolean>(false);

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button onClick={onThrow} className={classNames("", {}, [])}>
      trow error
    </Button>
  );
};
