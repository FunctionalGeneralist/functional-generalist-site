// Types that are the shape of whatever data objects.

import React from "react";

export interface ClickHandlerData {
    e: React.MouseEvent<HTMLElement, MouseEvent>
    key: string
}