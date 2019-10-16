/**
 * ReferralController contains functions to retrieve and add referrals.
 * A specific referral can be found by its ID.
 */
package org.cradlePlatform.controller;

import java.sql.Timestamp;
import java.util.Optional;

import org.cradlePlatform.model.Referral;
import org.cradlePlatform.repository.ReferralRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
public class ReferralController {
    @Autowired
    private ReferralRepository referralRepository;

    @PostMapping(path="/api/referrals")
    public @ResponseBody String addAReferral(@RequestParam int referrerId,
                                             @RequestParam String readingId,
                                             @RequestParam Timestamp timestamp){
        Referral newReferral = new Referral();
        newReferral.setId(referrerId);
        newReferral.setReadingId(readingId);
        newReferral.setTimestamp(timestamp);
        return "Saved Referral";
    }

    @GetMapping(path="/api/referrals")
    public @ResponseBody Iterable<Referral> getAllReferral() {
        return referralRepository.findAll();
    }

    @GetMapping(path="/api/referrals/{id}")
    public @ResponseBody
    Optional<Referral> getReferralById(@PathVariable(value = "id") String referrerId){
        return referralRepository.findById(referrerId);
    }
}


