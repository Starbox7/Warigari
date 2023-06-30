import 'package:app/src/modules/signup/view/signup.dart';
import 'package:flutter/material.dart';

class Navigation extends StatelessWidget {
  const Navigation({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      routes: {
        '/': (context) => Signup(),
        '/details': (context) => Placeholder(),
      },
    );
  }
}
