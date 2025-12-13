import { HttpInterceptorFn } from '@angular/common/http';
import { devEnvironments } from '../../../environments/environment.development';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const baseUrl = devEnvironments.apiUrl;

  if (req.url.startsWith('http')) {
    return next(req);
  }

  const updated = req.clone({
    url: `${baseUrl}${req.url}`,
  });

  return next(updated);
};
