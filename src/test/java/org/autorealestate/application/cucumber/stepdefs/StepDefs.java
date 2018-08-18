package org.autorealestate.application.cucumber.stepdefs;

import org.autorealestate.application.AutorealestateApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = AutorealestateApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
