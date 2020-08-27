import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';

import {CoverArt} from './cover-art';
export interface AudioFile {
    url: string;
    title: string;
    artist: string;
    coverArt?: CoverArt;
}
