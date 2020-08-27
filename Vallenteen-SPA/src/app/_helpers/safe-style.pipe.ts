import {Pipe, PipeTransform, SecurityContext} from '@angular/core';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
@Pipe({
    name: 'safeStyle',
})
export class SafeStylePipe implements PipeTransform {
    constructor(protected sanitizer: DomSanitizer) {}
    transform(value: string): SafeStyle {
        if (!value) return '';

        return this.sanitizer.sanitize(SecurityContext.STYLE, value);
    }
}