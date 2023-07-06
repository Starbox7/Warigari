import 'package:app/src/modules/signin/views/ui/signin.dart';
import 'package:app/src/modules/signup/views/ui/signup.dart';
import 'package:flutter/material.dart';

String initialRoute = '/signin';

Route<dynamic>? onGenerateRoute(RouteSettings settings) {
  switch (settings.name) {
    case '/signin':
      return _buildSlideTransitionRoute(const Signin());
    case '/signup':
      return _buildSlideTransitionRoute(const Signup());
    default:
      return null;
  }
}

Route _buildSlideTransitionRoute(Widget widget) {
  return PageRouteBuilder(
    pageBuilder: (context, animation, secondaryAnimation) => widget,
    transitionsBuilder: (context, animation, secondaryAnimation, child) {
      const begin = Offset(1.0, 0.0);
      const end = Offset.zero;
      const curve = Curves.ease;

      var tween = Tween(begin: begin, end: end).chain(CurveTween(curve: curve));

      return SlideTransition(
        position: animation.drive(tween),
        child: child,
      );
    },
  );
}
